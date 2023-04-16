## 1 - Giao thức giao tiếp

Giao thức giao tiếp giữa API và người dùng luôn sử dụng giao thức HTTPs.

## 2 - Tên miền

- https://api.example.com

Khuyên dùng cách trên

## 3 - Phiên bản

https://api.example.com/v1
https://api.example.com/v2

## 4 - Điểm cuối (Endpoint)

https://api.example.com/v1/zoos
https://api.example.com/v1/aninals

## 5 - Options HTTP

*GET (SELECT): lấy tài nguyên (một hoặc nhiều mục từ máy chú)
*CREATE (SELECT): Tạo một tài nguyên mới trên máy chủ
*PUT (UPDATE): Cập nhật tài nguyên trên máy chủ (máy khách cung cấp tài nguyên đầy đủ sau khi thay đổi)
*PATCH (UPDATE): Cập nhật tài nguyên trên máy chủ (máy khách cung cấp các thuộc tính đã thay đổi).
\*DELETE (DELETE): Xóa tài nguyên khỏi máy chủ

AND
\*HEAD: Láy siêu dữ liệu của tài nguyên

## 6 - Filtering

?limit=10: chỉ định số lượng bản ghi được trả về
?offset=10: chỉ định vị trí của bản ghi được trả về
?page=2&pẻ_page=100: chỉ định số trang và số lượng của bản ghi trên mỗi trang
?sortby=name&order=asc: Chỉ định thuộc tính nào để sắp xếp các kết quả trả về và lấy thứ tự sắp xếp

## 7 - Return status

200: Máy chủ trả về thành công dữ liệu do người dùng yêu cầu
201: CREATE-[POST /PUT/ PATCH]: Người dùng đã tạo hoặc sửa đổi dữ liệu thành công
202: Được chấp nhận. cho biết một yêu cầu đã vào hàng đợi nền (tác vụ không đồng bộ)
204: không có nội dung-[XÓA]: người dùng đã xóa thành công dữ liệu
400: yêu cầu không hợp lệ-[POST / PUT/ PATCH]: có lỗi trong yêu cầu do người dùng gởi và máy chủ chưa thực hiện thao tác tạo hoặc sửa đổi dữ liệu. thao tác này là vô ích
401 Unauthorized - [*]: cho biết rằng người dùng không có quyền (mã thông báo, tên người dùng và mật khẩu bị sai)
403 Forbidden - [*]: có nghĩa là người dùng được ủy quyền (trái ngược với lỗi 401), nhưng quyền truy cập bị cấm.
404 NOT FOUND - [*] yêu cầu do người dùng gởi là một bản ghi không tồn tại và máy chủ chưa thực hiện một thao tác. thao tác này là không quan trọng.
406 không thể chấp nhận - [GET]: không có định dạng do người dùng yêu cầu (ví dụ: người dùng yêu cầu định dạng JSON, nhưng chỉ có định dạng XML).
410 [GET]: tài nguyên do người dùng sẽ xóa vĩnh viễn và sẽ không tồn tại nữa.
422 thực thể không thẻ xử lý- [POST / PUT / PATCH] khi tạo một đối tượng, đã xảy ra lỗi xác thực
500 LỖI MÁY CHỦ NỘI BỘ - [*]: máy chủ bị lỗi và người dùng sẽ không thể xác định yêu cầu có thành công hay không.

## 8 - Xử lý lỗi

{
error: "Invalid API key"
}

## 9 - Return

GET / collection: trả về danh sách các đối tượng tài nguyên (mảng)
GET / collection / resource: trả về một đối tượng tài nguyên duy nhất
POST / collection: trả về đối tượng mới tài nguyên được tạo
PUT / collection / resource: trả về đối tượng tài nguyên hoàn chỉnh
PATCH / collection / resource: trả về đối tượng tài nguyên hoàn chỉnh
DELETE / collection / resource: trả về một tài liệu trống

## DOCS

https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm
https://en.wikipedia.org/wiki/Roy_Fielding
