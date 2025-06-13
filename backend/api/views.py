from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework_simplejwt.tokens import RefreshToken
from .models import UserProfile

# Create your views here.

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        name = request.data.get('name')
        email = request.data.get('email')
        password = request.data.get('password')
        role = request.data.get('role')
        if not all([name, email, password, role]):
            return Response({'error': 'All fields required'}, status=400)
        if User.objects.filter(username=email).exists():
            return Response({'error': 'User already exists'}, status=400)
        user = User.objects.create_user(username=email, email=email, password=password, first_name=name)
        UserProfile.objects.create(user=user, role=role)
        return Response({'success': True, 'name': name, 'email': email, 'role': role})

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(username=email, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            role = user.profile.role if hasattr(user, 'profile') else ''
            return Response({
                'name': user.first_name,
                'email': user.email,
                'role': role,
                'token': str(refresh.access_token),
            })
        return Response({'error': 'Invalid credentials'}, status=400)

class MeView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        user = request.user
        role = user.profile.role if hasattr(user, 'profile') else ''
        return Response({
            'name': user.first_name,
            'email': user.email,
            'role': role,
        })
