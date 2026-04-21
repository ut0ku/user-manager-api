Практическое занятие 19

Создано API для управления списком пользователей с базой данных PostgreSQL.
Сущность пользователь включает в себя поля: ID (integer), first_name (Varchar), last_name (Varchar), age (integer), created_at (Timestamp), updated_at (timestamp).
Список маршрутов: /api/users (Post & Get), /api/users/:id (Get / Patch / Delete).

БД
<img width="188" height="423" alt="image_2026-04-21_15-09-25" src="https://github.com/user-attachments/assets/eeeeca30-b2d5-4e51-9e68-7ed364d2d69a" />

Поля
<img width="357" height="96" alt="image_2026-04-21_15-08-55" src="https://github.com/user-attachments/assets/f98e1bfa-adc6-4c62-944d-9e9494889cc5" />

/api/users (POST)
<img width="645" height="434" alt="image_2026-04-21_15-08-33" src="https://github.com/user-attachments/assets/3516f894-b008-4d45-88db-fd2b56ea632e" />

/api/users (GET)
<img width="645" height="434" alt="image_2026-04-21_15-10-34" src="https://github.com/user-attachments/assets/9714a1f8-b031-45e8-be44-87c9e5f25e66" />

/api/users/:id (GET)
<img width="646" height="434" alt="image_2026-04-21_15-11-11" src="https://github.com/user-attachments/assets/8cbca3c3-7f16-4c4f-9c79-86bce1c9fd22" />

/api/users/:id (Patch)
<img width="647" height="434" alt="image_2026-04-21_15-11-58" src="https://github.com/user-attachments/assets/46a90e92-e535-4857-8652-cde0e6293656" />

/api/users/:id (Delete)
<img width="647" height="434" alt="image_2026-04-21_15-12-36" src="https://github.com/user-attachments/assets/5b3eed2f-f5bc-4cac-8231-ab3ae65a1b0d" />
