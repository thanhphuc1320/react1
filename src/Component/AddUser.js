import React, { Component } from "react";

class AddUser extends Component {
//tạo state lưu data nhập
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      name:"",
      Phone:"",
      Permission:""
    }
  }
  

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
    //Chuyển những dữ liệu ghi vào state chuyển thành 1 chuỗi item
    // var item = {};
    // item.id = this.state.id;
    // item.name = this.state.name;
    // item.Phone = this.state.Phone;
    // item.Permission = this.state.Permission;
    //console.log(item);
  };

  kiemTraTrangThai = () => {
    if (this.props.trangThaiHienThi === true) {
      return (
        <div className="col">
          <form>
          <div className="card text-left">
            <div
              className="card border-primary mb-3 mt-2"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">Thêm mới User</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    onChange={(event) => this.isChange(event)}
                    type="text"
                    className="form-control"
                    placeholder="Tên User"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={(event) => this.isChange(event)}
                    type="text"
                    className="form-control"
                    placeholder="Số điện thoại"
                    name="Phone"
                  />
                </div>
                <div className="form-group">
                  <select
                    onChange={(event) => this.isChange(event)}
                    className="custom-select"
                    name="Permission"
                    required
                  >
                    <option value>Chọn quyền mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Modrator</option>
                    <option value={3}>Member</option>
                  </select>
                </div>
               
                  <input type = "reset" onClick={(name, Phone, Permission) => this.props.add(this.state.name, this.state.Phone, this.state.Permission)} className="btn btn-block btn-primary" value = "Thêm mới"/>
                
              </div>
            </div>
          </div>
          </form>
        </div>
      );
    }
  };

  render() {
    //console.log(this.state);
    return (
      <div>
        {/* {this.hienThiNut()}
        {this.hienThiForm()} */}
        {this.kiemTraTrangThai()}
      </div>
    );
  }
}

export default AddUser;

//hiển thị nút thêm và đóng bằng cách dừng state trên cùng 1 component
// constructor(props) {
//   super(props);
//   this.state = {
//     trangThaiChinhSua: true
//   };
// }

// thayDoiTrangThai = () => {
//   this.setState({
//     trangThaiChinhSua: !this.state.trangThaiChinhSua
//   })
// }

// hienThiNut = () => {
//   if (this.state.trangThaiChinhSua == true) {
//     return (
//       <div
//         className="btn btn-block btn-outline-secondary"
//         onClick={() => this.thayDoiTrangThai()}
//       >
//         Đóng
//       </div>
//     );
//   } else {
//     return (
//       <div
//         className="btn btn-block btn-outline-info"
//         onClick={() => this.thayDoiTrangThai()}
//       >
//         Thêm mới
//       </div>
//     );
//   }
// };

// hienThiForm = () => {
//   if (this.state.trangThaiChinhSua === true){
//     return(
//       <div className="card text-left">
//         <div
//           className="card border-primary mb-3 mt-2"
//           style={{ maxWidth: "18rem" }}
//         >
//           <div className="card-header">Thêm mới User</div>
//           <div className="card-body text-primary">
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Tên User"
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Số điện thoại"
//               />
//             </div>
//             <div className="form-group">
//               <select className="custom-select" required>
//                 <option value>Chọn quyền mặc định</option>
//                 <option value={1}>Admin</option>
//                 <option value={2}>Modrator</option>
//                 <option value={3}>Member</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <div className="btn btn-block btn-primary">Thêm mới</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
