import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

export default class TableData extends Component {
  deleteUser  = (idUser) => {
    this.props.deleteUser(idUser)
    
  }
  mappingDataUser = () => {
    return this.props.dataTruyenVao.map((value, key) => (
      <TableDataRow
        deleteUser={(idUser) => this.deleteUser(idUser)}
        editUserStatus={() => this.props.editUserStatus()}
        editUserInTable={(user) => this.props.edit(value)} //do hàm map là duyệt từng phần tử nên truyền vào 1 value có nghĩa là truyền từng user
        stt={key}
        key={key}
        userName={value.name}
        Phone={value.Phone}
        Permission={value.Permission}
        id = {value.id}
      />
    ));
  };

  render() {
    return (
      <div className="col">
        <table className="table table-striped table-inverse table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Tên </th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}
