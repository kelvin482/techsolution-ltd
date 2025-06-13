from supabase import create_client, Client
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Get Supabase credentials
url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_ANON_KEY")

# Initialize client
supabase: Client = create_client(url, key)

try:
    response = supabase.table("your_table_name").select("*").limit(1).execute()
    print("✅ Supabase is connected successfully!")
    print("Sample data:", response.data)
except Exception as e:
    print("❌ Supabase connection failed:")
    print(e)
