# Supabase Integration Guide for Django + Next.js

This guide provides detailed instructions for integrating Supabase as the database backend for your Django + Next.js application.

## What is Supabase?

Supabase is an open-source Firebase alternative that provides:
- PostgreSQL Database
- Authentication
- Instant APIs
- Real-time subscriptions
- Storage
- Functions

## Prerequisites

- Existing Django + Next.js application (refer to main README.md)
- [Supabase account](https://supabase.com/) (free tier available)
- Basic knowledge of PostgreSQL

## Step 1: Create a Supabase Project

1. Sign up or log in to [Supabase](https://supabase.com/)
2. Click "New Project" and fill in:
   - Project name
   - Database password (save this securely)
   - Region (choose closest to your users)
3. Wait for your project to be provisioned (usually takes 1-2 minutes)

## Step 2: Get Your Supabase Credentials

From your Supabase project dashboard:

1. Go to Project Settings → API
2. Note down:
   - Project URL (`https://[YOUR-PROJECT-ID].supabase.co`)
   - API Keys (anon/public key and service_role key)
3. Go to Project Settings → Database
4. Note down your database connection information:
   - Host: `db.[YOUR-PROJECT-ID].supabase.co`
   - Database name: `postgres`
   - Port: `5432`
   - User: `postgres`
   - Password: (the one you set during project creation)

## Step 3: Configure Django to Use Supabase PostgreSQL

1. Install required packages:
   ```
   pip install dj-database-url psycopg2-binary python-dotenv
   ```

2. Update your Django `.env` file with Supabase database credentials:
   ```
   SECRET_KEY=your-secret-key
   DEBUG=True
   DATABASE_URL=postgres://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-ID].supabase.co:5432/postgres
   ```

3. Update your Django `settings.py` to use the environment variable:
   ```python
   import os
   import dj_database_url
   from pathlib import Path
   from dotenv import load_dotenv

   # Load environment variables
   load_dotenv()

   # Build paths inside the project like this: BASE_DIR / 'subdir'.
   BASE_DIR = Path(__file__).resolve().parent.parent

   # SECURITY WARNING: keep the secret key used in production secret!
   SECRET_KEY = os.getenv('SECRET_KEY', 'django-insecure-default-key')

   # SECURITY WARNING: don't run with debug turned on in production!
   DEBUG = os.getenv('DEBUG', 'False') == 'True'

   # Database
   # https://docs.djangoproject.com/en/4.2/ref/settings/#databases
   
   DATABASES = {
       'default': dj_database_url.config(
           default=os.getenv('DATABASE_URL', 'sqlite:///db.sqlite3'),
           conn_max_age=600,
           conn_health_checks=True,
       )
   }
   ```

4. Run migrations to set up your remote database:
   ```
   python manage.py migrate
   ```

## Step 4: Set Up Next.js to Use Supabase Client

1. Install Supabase client library:
   ```
   npm install @supabase/supabase-js
   ```

2. Create a Supabase client utility (`lib/supabaseClient.js`):
   ```javascript
   import { createClient } from '@supabase/supabase-js'

   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
   const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

   export const supabase = createClient(supabaseUrl, supabaseAnonKey)
   ```

3. Update your Next.js `.env.local` file with Supabase credentials:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   NEXT_PUBLIC_SUPABASE_URL=https://[YOUR-PROJECT-ID].supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[YOUR-ANON-KEY]
   ```

## Step 5: Using Supabase Auth (Optional)

If you want to use Supabase Authentication instead of Django's:

1. Update your Next.js frontend to include auth functions:

   ```javascript
   // lib/auth.js
   import { supabase } from './supabaseClient'

   export async function signUp(email, password) {
     return supabase.auth.signUp({
       email,
       password,
     })
   }

   export async function signIn(email, password) {
     return supabase.auth.signInWithPassword({
       email,
       password,
     })
   }

   export async function signOut() {
     return supabase.auth.signOut()
   }

   export function getUser() {
     return supabase.auth.getUser()
   }
   ```

2. Create Django middleware to validate Supabase JWT tokens:

   ```python
   # api/middleware.py
   import jwt
   from django.conf import settings
   from django.contrib.auth.models import AnonymousUser
   from django.contrib.auth import get_user_model
   
   User = get_user_model()
   
   class SupabaseAuthMiddleware:
       def __init__(self, get_response):
           self.get_response = get_response
           
       def __call__(self, request):
           auth_header = request.META.get('HTTP_AUTHORIZATION', '')
           if auth_header.startswith('Bearer '):
               token = auth_header.replace('Bearer ', '')
               try:
                   # Verify and decode the JWT token from Supabase
                   # You'll need to get the JWT secret from Supabase
                   payload = jwt.decode(token, settings.SUPABASE_JWT_SECRET, algorithms=['HS256'])
                   
                   # Get or create user based on Supabase user ID
                   supabase_uid = payload.get('sub')
                   email = payload.get('email')
                   
                   if supabase_uid and email:
                       user, created = User.objects.get_or_create(
                           username=supabase_uid,
                           defaults={'email': email}
                       )
                       request.user = user
                   else:
                       request.user = AnonymousUser()
               except (jwt.InvalidTokenError, User.DoesNotExist):
                   request.user = AnonymousUser()
           else:
               request.user = AnonymousUser()
               
           return self.get_response(request)
   ```

3. Add the middleware to your `settings.py`:
   ```python
   MIDDLEWARE = [
       # ... other middleware
       'api.middleware.SupabaseAuthMiddleware',
   ]
   
   # Add Supabase JWT secret
   SUPABASE_JWT_SECRET = os.getenv('SUPABASE_JWT_SECRET')
   ```

## Step 6: Using Supabase Database Directly in Next.js (Optional)

For real-time features or direct database access from the frontend:

```javascript
// Example: Fetching data directly from Supabase
async function fetchItems() {
  const { data, error } = await supabase
    .from('items')
    .select('*')
  
  if (error) {
    console.error('Error fetching items:', error)
    return []
  }
  
  return data
}

// Example: Real-time subscription
function subscribeToItems(callback) {
  const subscription = supabase
    .from('items')
    .on('*', payload => {
      callback(payload)
    })
    .subscribe()
    
  return subscription
}
```

## Step 7: Creating Tables in Supabase

1. Go to your Supabase dashboard → Table Editor
2. Click "Create a new table"
3. Define your table structure:
   - Name: e.g., `profiles`
   - Columns:
     - `id` (UUID, primary key)
     - `user_id` (UUID, foreign key to auth.users)
     - Other columns as needed
4. Set up Row Level Security (RLS) policies for secure access

Alternatively, you can use Django's migration system to create tables:
```
python manage.py makemigrations
python manage.py migrate
```

## Step 8: Setting Up Row Level Security (RLS)

To secure your Supabase tables:

1. Go to Authentication → Policies
2. For each table, create policies:
   - Read policy: `auth.uid() = user_id`
   - Insert policy: `auth.uid() = user_id`
   - Update policy: `auth.uid() = user_id`
   - Delete policy: `auth.uid() = user_id`

## Advanced Features

### Storage Integration

1. Install Supabase storage client:
   ```
   npm install @supabase/storage-js
   ```

2. Upload files from Next.js:
   ```javascript
   async function uploadFile(file, bucketName = 'avatars') {
     const filename = `${Date.now()}-${file.name}`
     
     const { data, error } = await supabase
       .storage
       .from(bucketName)
       .upload(filename, file)
       
     if (error) {
       console.error('Error uploading file:', error)
       return null
     }
     
     return data.path
   }
   ```

### Real-time Sync Between Django and Supabase

Create Django signals to sync model changes with Supabase:

```python
# api/signals.py
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import YourModel
import httpx

@receiver(post_save, sender=YourModel)
def sync_model_to_supabase(sender, instance, created, **kwargs):
    # Use httpx to send data to Supabase REST API
    url = f"{settings.SUPABASE_URL}/rest/v1/your_table"
    headers = {
        "apikey": settings.SUPABASE_SERVICE_KEY,
        "Authorization": f"Bearer {settings.SUPABASE_SERVICE_KEY}",
        "Content-Type": "application/json"
    }
    
    data = {
        "id": str(instance.id),
        "name": instance.name,
        # Other fields...
    }
    
    if created:
        # Insert new record
        httpx.post(url, json=data, headers=headers)
    else:
        # Update existing record
        httpx.patch(f"{url}?id=eq.{str(instance.id)}", json=data, headers=headers)
```

## Troubleshooting

### Common Issues

1. **Connection Refused**:
   - Check your database credentials
   - Ensure your Supabase project is active
   - Check if your IP is allowed in Supabase dashboard

2. **Migration Issues**:
   - Make sure your PostgreSQL version in Supabase is compatible with Django

3. **CORS Errors**:
   - Add your frontend URL to the allowed origins in Supabase

4. **JWT Verification Failed**:
   - Ensure you're using the correct JWT secret from Supabase

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Django with PostgreSQL](https://docs.djangoproject.com/en/4.2/ref/databases/#postgresql-notes)
- [Row Level Security in PostgreSQL](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase Auth Helpers for Next.js](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)

## Security Best Practices

1. **Never expose service_role key** in your frontend code
2. **Use environment variables** for all sensitive credentials
3. **Implement Row Level Security** on all Supabase tables
4. **Keep Django SECRET_KEY secure** and different from Supabase keys
5. **Use parameterized queries** to prevent SQL injection

## Production Considerations

1. **Database Connection Pooling**:
   - Adjust pool settings in Django for production load

2. **Environment Configuration**:
   - Use different Supabase projects for development and production

3. **Backup Strategy**:
   - Set up regular database backups through Supabase dashboard

4. **Monitoring**:
   - Use Supabase dashboard to monitor database performance
   - Set up alerts for unusual activity 