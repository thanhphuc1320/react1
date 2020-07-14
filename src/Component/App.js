import React, { Component } from "react";

import "../App.css";
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import AddUser from "./AddUser";
import dataUser from "./Data.json";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThaiHienThi: false,
      data: [],
      searchText: "",
      editStatus: false,
      userEdit: {},
    };
  }

  componentWillMount() {
    //kiem tra xem co localstorage hay chua
    //đề phòng nếu có rồi sẽ bị xoá data
    // JSON.stringify mã hoá object trong file data.json thành chuỗi string rồi đưa vào localStorage
    // JSON.parse giải mã  chuỗi string trong localStorage thành object
    if (localStorage.getItem("userDataLocal") === null) {
      localStorage.setItem("userDataLocal", JSON.stringify(dataUser));
    } else {
      var tempLocal = JSON.parse(localStorage.getItem("userDataLocal"));
      this.setState({
        data: tempLocal,
      });
    }
  }

  

  //hiển thị thanh thêm or đóng
  thayDoiTrangThai = () => {
    this.setState({
      trangThaiHienThi: !this.state.trangThaiHienThi,
    });
  };
  //lấy data search
  getTextSearch = (dataSearch) => {
    this.setState({
      searchText: dataSearch,
    });
  };

  //edit user lấy data từ tabledatarow.js qua edituser.js
  getUserEdit = (user) => {
    console.log("thanh cong");
    this.setState({
      userEdit: user,
    });
    // console.log(user);
  };

  //thay đổi hiển thị form edit
  editUserStatus = () => {
    this.setState({
      editStatus: !this.state.editStatus,
    });
  };

  //function get data edit user from EditUser.js

  userDataEditApp = (info) => {
    //sử dụng foreach để tìm id trùng với info.id rồi sửa
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.Phone = info.Phone;
        value.Permission = info.Permission;
      }
    });
    localStorage.setItem("userDataLocal", JSON.stringify(this.state.data));
  };
  getUserDelete = (idUser) => {
    // sử dụng hàm filter để xoá phần tử cần xoá
    //console.log("thanh cong ket noi delete " + idUser);
    var tempData = this.state.data.filter((item) => item.id !== idUser); //hiện những user không thuộc đièu kiện
    this.setState({
      data: tempData,
    });
    localStorage.setItem("userDataLocal", JSON.stringify(tempData));
  };
  // thêm mới user
  getNewUserData = (name, Phone, Permission) => {
    var item = {};
    item.id = uuidv4(); // tạo ra id không trùng với id khác
    item.name = name;
    item.Phone = Phone;
    item.Permission = Permission;

    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items,
    });
    localStorage.setItem("userDataLocal", JSON.stringify(items));
    // console.log("thanh cong");
    //console.log(items);
  };

  render() {
    // localStorage sử dụng để lưu trữ dữ liệu khi chưa có back-end chuẩn. Có 3 thuộc tính:
    // localStorage.setItem("key1", "Hello"); // tạo dữ liệu với 2 tham số key và value
    // console.log(localStorage.getItem("key1"));// lấy dữ liệu dựa trên key
    // localStorage.removeItem("key1"); // xoá dữ liệu dựa trên key
    //localStorage.setItem("userDataLocal", JSON.stringify(this.state.data));

    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    });
    // console.log(ketqua);

    return (
      <div>
        <Header />
        <div className="search-form">
          <div className="container">
            <div className="row">
              <Search
                userDataEditApp={(info) => this.userDataEditApp(info)}
                userEdit={this.state.userEdit}
                showEditStatus={this.state.editStatus}
                getTextSearchProps={(dataSearch) =>
                  this.getTextSearch(dataSearch)
                }
                ketNoi={() => this.thayDoiTrangThai()}
                trangThaiHienThi={this.state.trangThaiHienThi}
                editUserStatus={() => this.editUserStatus()}
              />
              {/* hiển thị data table theo kết quả tìm kiếm 'ketqua' */}
              <TableData
                deleteUser={(idUser) => this.getUserDelete(idUser)}
                editUserStatus={() => this.editUserStatus()} //thay doi trạng thái hiển thị form edit
                edit={(user) => this.getUserEdit(user)}
                dataTruyenVao={ketqua}
              />
              <AddUser
                add={(name, Phone, Permission) =>
                  this.getNewUserData(name, Phone, Permission)
                }
                trangThaiHienThi={this.state.trangThaiHienThi}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
