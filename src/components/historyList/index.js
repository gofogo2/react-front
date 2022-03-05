import { Divider } from '@material-ui/core';
import './historyList.css'
import gofogo from "../../assets/images/gofogo.jpg";

const HistoryList=()=>{

    const Button =({type})=>{
        return <button className={'historyButton '+type}>{type}</button>
    }

    return <div className='history' >
        <h3 className='historyTitle'>History List</h3>
        <table className='historyTable'>
            <tr className='historyTableTr'>
                <th className='historyTableTh'>Customer</th>
                <th className='historyTableTh'>Date</th>
                <th className='historyTableTh'>Amount</th>
                <th className='historyTableTh'>Status</th>
            </tr>
            <tr className='historyTableTr'>
                <td className='historyUser'>
                    <img className='historyImg' src={gofogo} alt="" />

                </td>
                <td className='historyDate'>2 Jun 2021</td>
                <td className='historyAmount'>$122.00</td>
                <td className='historyStatus'><Button type="Approved" /></td>
            </tr>
        </table>
    </div>
}

export default HistoryList;