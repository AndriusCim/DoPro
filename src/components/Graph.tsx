import React from 'react';
import { GraphInfoDto } from 'api/graph';
import { Line } from 'react-chartjs-2';

interface Props {
    graphInfo: GraphInfoDto[] | null,
    loading: boolean
}

const Graph: React.FC<Props> = ({ graphInfo, loading }) => {

    const state = {
        labels: graphInfo?.map(x => x.Date),
        datasets: [
            {
                label: 'Confirmed Cases',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#47B881',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0.2,
                data: graphInfo?.map(x => x.Cases)
            }
        ]
    }

    return (
        <div style={{ width: 1000 }}>
            <Line
                data={state}
            />
        </div>
    );
}

export default Graph;