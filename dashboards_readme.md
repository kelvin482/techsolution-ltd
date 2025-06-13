# Dashboard System Documentation

## Overview
This is a dashboard system that helps manage IT support requests and user management. The system has three different types of users, each with their own special dashboard.

## User Roles

### 1. Admin
- Can add new staff members
- Can remove staff members
- Can reset passwords
- Can see all dashboards
- Can change system settings

### 2. Staff
- Can help with IT support requests
- Can see their assigned tasks
- Can guide users through problems
- Can handle support calls

### 3. Users
- Can see their own dashboard
- Can ask for IT support
- Can check the status of their support requests

## Dashboard Access
Each user type has their own special dashboard:
- Admin Dashboard: `/admin-dashboard`
- Staff Dashboard: `/staff-dashboard`
- User Dashboard: `/user-dashboard` (Already working!)

## What's Done and What's Next

✅ Completed:
- User Dashboard is working
- Basic navigation links are set up

🔄 In Progress:
- Building Admin Dashboard
- Building Staff Dashboard
- Making login work with role-based access
- Connecting to Django backend
- Setting up Supabase for data storage

## How to Use
1. Log in with your username and password
2. The system will automatically take you to the right dashboard based on your role
3. Use the features available for your role

## Technical Details
- Frontend: Next.js
- Backend: Django
- Database: Supabase
- Authentication: Role-based access control

## Getting Started
1. Make sure you have the right permissions
2. Log in to the system
3. You'll be taken to your role's dashboard
4. Start using the features available to you

## Support
If you need help:
- Users: Submit a support request through your dashboard
- Staff: Contact your supervisor
- Admins: Use the admin panel for system management 