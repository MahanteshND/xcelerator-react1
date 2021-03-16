import React,{ Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from 'react-redux';


class DashBoard extends Component {
  render () {
    let ArrayData;
    if(this.props.roleType === "Operation"){
      ArrayData = this.props.data.filter(item => item.roleType !== "Operation" )
    }else if(this.props.roleType === "Consumer"){
      ArrayData = this.props.data.filter(item => item.roleType !== "Consumer" && item.roleType !== "Operation")
    }else{
      ArrayData = this.props.data
    }
    console.log("data",this.props.roleType);
    return (
      <div>
        <h3 style={{ marginTop: 40, textAlign: 'center', color: 'green' }}>Dash Board</h3>
        <div style={{ margin : 80}}>
          <BootstrapTable data={ArrayData} search striped pagination hover condensed filterFormatted options={ { noDataText: 'Table is Empty..' } }>
            <TableHeaderColumn width='150' isKey dataField='id'> ID</TableHeaderColumn>
            <TableHeaderColumn width='150' dataSort={true} dataField='name'> Name</TableHeaderColumn>
            <TableHeaderColumn width='150' dataSort={true} dataField='roleType'>Role</TableHeaderColumn>
            <TableHeaderColumn width='150' dataSort={true} dataField='email'>Email</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='phoneNo'>Phone No.</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    return {
      data: state.DashBoardData.data,
      roleType: state.DashBoardData.roleType
    }
  }

export default connect(mapStateToProps, null) (DashBoard);