from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView, Response, status
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import UserSerializerWithToken, UserSerializer, MyTokenObtainPairSerializer


class UserRegister(APIView):
    def post(self, request):
        data = request.data

        try:
            user = User.objects.create(
                name=data["name"],
                email=data['email'],
                password=make_password(data['password']),
            )
            serializer = UserSerializerWithToken(user)
            return Response(serializer.data)

        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request):
        user = request.user
        data = request.data

        serializer = UserSerializerWithToken(user)

        user.password = make_password(data['password'])
        user.save()
        return Response(serializer.data)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
