import React, { Component } from "react";
import EditUser from "./EditUser";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: '',
      userDataEdit: {}
    }
  }

  isChange = (event) => {
    console.log(event.target.value);
    this.setState({
      tempValue: event.target.value
    });
    this.props.getTextSearchProps(this.state.tempValue);//gọi thẳng hàm cha để search ngay khi đang gõ = search realtime
  }
  
  kiemTraHienThi = () => {
    if (this.props.trangThaiHienThi === true) {
      return (
        <div
          className="btn btn-block btn-outline-secondary"
          onClick={() => this.props.ketNoi()}
        >
          Đóng
        </div>
      );
    } else {
      return (
        <div
          className="btn btn-block btn-outline-info"
          onClick={() => this.props.ketNoi()}
          
        >
          Thêm
        </div>
      );
    }
  };

  // hàm kiểm tra trạng thái edit

  checkShowEdit  = () => {
   if (this.props.showEditStatus === true){
     return <EditUser
     getUserDataEdit = {(info) => this.userDataEdit(info)}
     userEdit = {this.props.userEdit}
      editUserStatus = {() => this.props.editUserStatus()}/>
   }
  }

  //hàm lấy data useredit
  userDataEdit = (info) => {
    this.setState({
      userDataEdit: info
    });
    this.props.userDataEditApp(info)
    
    
  }

  render() {
    //console.log("data" + this.state.userDataEdit.name);
    return (
      <div className="col-12">
        {this.checkShowEdit()}
        <div className="form-group">
          <div className="btn-group btn-block">
            
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
                onChange={(event) => this.isChange(event)}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={(dataSearch) => this.props.getTextSearchProps(this.state.tempValue)}
              >
                Tìm kiếm
              </button>
            
          </div>
          <div>{this.kiemTraHienThi()}</div>
        </div>
        <hr />
      </div>
    );
  }
}
