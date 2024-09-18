## Beberapa http method yang umum digunakan

### 1. Method GET
``` bash
curl -X GET https://api.example.com/tasks
curl -X GET https://api.example.com/tasks/1

```

### 2. Method POST
``` bash
curl -X POST https://api.example.com/tasks -H "Content-Type: application/json" -d '{"title": "New Task", "description": "Description of the new task"}'
```

### 3. Method PUT
``` bash
curl -X PUT https://api.example.com/tasks/1 -H "Content-Type: application/json" -d '{"title": "Updated Task", "description": "Updated description"}'
```

### 4. Method DELETE
``` bash
curl -X DELETE https://api.example.com/tasks/1
```

### 5. Method PATCH
``` bash
curl -X PATCH https://api.example.com/tasks/1 -H "Content-Type: application/json" -d '{"description": "Partially updated description"}
```