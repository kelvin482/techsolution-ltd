# Supabase Environment Setup

## Your Supabase Project Information
- **Project URL**: https://eveycjkhgnadfsmogguc.supabase.co
- **Project Name**: Online IT Support
- **Database Password**: Ebst5/13408/24

## Setup Instructions

### 1. Create Django Backend .env File

Create a file named `.env` in your `backend` directory with the following content:

```
# Django + Supabase Environment Variables

# Django settings
SECRET_KEY=django-insecure-fbt_+ic2#q9thb6*5&33l&p@mj2yai#$vilmzbzy2e7ika175b
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database connection (Supabase PostgreSQL)
DATABASE_URL=postgres://postgres:Ebst5/13408/24@db.eveycjkhgnadfsmogguc.supabase.co:5432/postgres

# Supabase credentials
SUPABASE_URL=https://eveycjkhgnadfsmogguc.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2ZXljamtoZ25hZGZzbW9nZ3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NjQwNTAsImV4cCI6MjA2NTE0MDA1MH0.fYnM5-2Vz6wwhRHH9IRv30TNP8Cm5c5ZsD6k9WyBhQ8
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2ZXljamtoZ25hZGZzbW9nZ3VjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTU2NDA1MCwiZXhwIjoyMDY1MTQwMDUwfQ.uLvz877CCrJUfPgK1Po5tTPSYN1eTNVSIdvoLhw6xAM

# CORS settings
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

### 2. Create Next.js Frontend .env.local File

Create a file named `.env.local` in your `frontend` directory with the following content:

```
# Next.js + Supabase Environment Variables

# API URL for connecting to Django backend
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=https://eveycjkhgnadfsmogguc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2ZXljamtoZ25hZGZzbW9nZ3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NjQwNTAsImV4cCI6MjA2NTE0MDA1MH0.fYnM5-2Vz6wwhRHH9IRv30TNP8Cm5c5ZsD6k9WyBhQ8

# Project name
NEXT_PUBLIC_PROJECT_NAME=Online IT Support
```

### 3. Update Django Settings

Make sure your Django `settings.py` file is updated to use these environment variables:

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

# Supabase settings
SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_ANON_KEY = os.getenv('SUPABASE_ANON_KEY')
SUPABASE_SERVICE_KEY = os.getenv('SUPABASE_SERVICE_KEY')
```

### 4. Create Supabase Client in Next.js

Create a file named `lib/supabaseClient.js` in your frontend directory:

```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

## Security Warning

⚠️ **IMPORTANT**: These files contain sensitive information. Never commit them to version control.
Add `.env` and `.env.local` to your `.gitignore` file to prevent accidental commits.

## Next Steps

After setting up these environment files:

1. Install required packages:
   ```
   pip install dj-database-url psycopg2-binary python-dotenv
   ```

2. Run Django migrations to set up your Supabase database:
   ```
   python manage.py migrate
   ```

3. Install Supabase client in your Next.js app:
   ```
   npm install @supabase/supabase-js
   ``` 