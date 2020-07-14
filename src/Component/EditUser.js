import React, { Component } from "react";

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:this.props.userEdit.id,
      name:this.props.userEdit.name,
      Phone:this.props.userEdit.Phone,
      Permission:this.props.userEdit.Permission
    }
  }
  
  
  isChange  = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]:value
    })
    // this.props.editUserStatus;
  }

  saveButton = () => {
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.Phone = this.state.Phone;
    info.Permission = this.state.Permission;
    this.props.getUserDataEdit(info)
   // console.log(info);
    
    this.props.editUserStatus()
  }

  render() {
    return (
      <div className="col-12"> 
        <form>
          <div className="card text-left">
            <div
              className="card border-secondary bg-secondary mb-3 mt-2"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header text-center">Sửa thông tin User</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    onChange = {(event) => this.isChange(event)}
                    defaultValue={this.props.userEdit.name}
                    type="text"
                    className="form-control"
                    placeholder="Tên User"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <input
                  onChange = { (event) => {this.isChange(event)}}
                    defaultValue={this.props.userEdit.Phone}
                    type="text"
                    className="form-control"
                    placeholder="Số điện thoại"
                    name="Phone"
                  />
                </div>
                <div className="form-group">
                  <select
                    onChange = {(event) => this.isChange(event)}
                    defaultValue={this.props.userEdit.Permission}
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

                <input
                  type="reset"
                  className="btn btn-block btn-primary"
                  value="Lưu"
                  onClick = {() => this.saveButton()}
                />
              </div>
            </div>
          </div>
        </form>
      
      </div>
    );
  }
}
