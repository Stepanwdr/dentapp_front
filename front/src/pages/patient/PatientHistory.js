import React, {Component} from "react";

import PatientWrapper from "../../components/patient_dashboard/PatientWrapper";
import MyCollapsedHistory from "../../components/patient_dashboard/MyCollapsedHistory";
import PatientHeader from "../../components/patient_dashboard/PatientHeader";
class PatientHistory extends Component {
    constructor(props) {
        super(props);
       this.state = {
          
        };
    }

  
    handleChange = (pagination, filters, sorter) => {
        console.log("Various parameters", pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

   



    render() {
       let {sortedInfo,filteredInfo}=this.state;
  
     
        return (
            <PatientWrapper>
                    <div className="content ml">
         <PatientHeader/>
      
<MyCollapsedHistory/>
</div>

            </PatientWrapper>
        );
    }
}

export default PatientHistory;


