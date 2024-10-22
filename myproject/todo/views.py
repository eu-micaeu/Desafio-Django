from django.shortcuts import render
from .models import TodoItem

def index(request):
    todo_items = TodoItem.objects.all()
    return render(request, 'todo/index.html', {'todo_items': todo_items})
