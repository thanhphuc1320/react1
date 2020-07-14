import React, { Component } from "react";

export default class TableDataRow extends Component {

  editUser  = () => {
    this.props.editUserInTable();
    this.props.editUserStatus();//thay đổi trạng thái form edit
  }

  deleteUser = (idUser) => {
    this.props.deleteUser(idUser);
  }

  // isChange  = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]:value
  //   })
  // }

  checkPerMission = () => {
    if (parseInt(this.props.Permission) === 1) {//vì khi đưa data vào LocalStorage thì Permission được mã hoá thành string nên không === với dạng Int
      return "Admin";
    } else if (parseInt(this.props.Permission) === 2) {
      return "Moderator";
    } else {
      return "Member";
    }
  };
  render() {
    return (
      <tr>
        <td>{this.props.stt + 1}</td>
        <td name = "name">{this.props.userName}</td>
        <td name="Phone">{this.props.Phone}</td>
        <td name="Permission">{this.checkPerMission()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning sua ">
              {" "}
              <i className="fa fa-edit" onClick={() => this.editUser() }>Sửa</i>
            </div>
            <div className="btn btn-danger xoa ">
              {" "}
              <i className="fa fa-delete" onClick={(idUser) => this.deleteUser(this.props.id)}>Xoá</i>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}
