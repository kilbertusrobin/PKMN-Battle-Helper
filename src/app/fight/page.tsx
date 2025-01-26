import React from 'react';
import Side from './(content)/side';

const FightPage: React.FC = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <Side sideTeam='ally'/>
            <Side sideTeam='enemy'/>
        </div>
    );
};

export default FightPage;