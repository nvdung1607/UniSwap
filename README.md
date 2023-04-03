## TÍNH NĂNG
- Người dùng có thể tạo tài khoản, chỉnh sửa thông tin tài khoản như ngày sinh, giới tính, sđt, email, bio.
- Người dùng có thể nạp token hoặc rút token ra khỏi ví.
- Người dùng có thể chuyển đổi giữa các loại token với nhau.

##Giao diện tham khảo(React Native):
https://snack.expo.dev/@nvdung1607/uniswap
![image](https://user-images.githubusercontent.com/97034115/229402740-cd4bc2ac-0e86-458f-a6bd-053e159155a4.png)
![image](https://user-images.githubusercontent.com/97034115/229402811-dd1fd77b-2723-43bb-92df-445c523dea2e.png)
![image](https://user-images.githubusercontent.com/97034115/229402842-63dc4b48-91ce-4951-a2b1-7a93d740389b.png)
![image](https://user-images.githubusercontent.com/97034115/229402915-68388214-9d42-4e86-bb1b-96750f26388e.png)
![image](https://user-images.githubusercontent.com/97034115/229402965-76a66134-bd24-4bf6-8701-f5656ebfb6c0.png)
![image](https://user-images.githubusercontent.com/97034115/229403001-37b6df01-7fec-4f81-ac2d-d5a765215549.png)

## Mô hình cơ sở dữ liệu

![alt text](https://cdn.discordapp.com/attachments/703442047469617273/1051105343326928916/bakaswap_diagram.png)

## Cấu trúc code backend: 
### main
- main.py: file main xây dựng FastAPI service, định nghĩa cấu trúc các API
### sql_app
- crud.py : Định nghĩa các method (read,write) để kết nối đến MySQL
- database.py : Kết nối MySQL
- models.py: Định nghĩa class object models cho FastAPI
- schemas.py: Định nghĩa lược đồ để làm việc với yêu cầu/phản hồi API cụ thể

