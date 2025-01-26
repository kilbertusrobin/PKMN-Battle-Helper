'use client';

import React from 'react';

interface SideProps {
    sideTeam: 'ally' | 'enemy';
}

const Side: React.FC<SideProps> = ({ sideTeam }) => {
    const mainColor = sideTeam === 'enemy' ? 'text-red-600' : 'text-blue-600';
    const bgColor = sideTeam === 'enemy' ? 'bg-red-600' : 'bg-blue-600';
    const border = sideTeam === 'enemy' ? 'border border-red-600' : 'border border-blue-600';

    return (
        <div className="w-1/2 border h-full">
            { sideTeam === 'ally' && 
                <p className={`${border}`}>Équipe alliée</p>
            }
            { sideTeam === 'enemy' && 
                <p>Équipe ennemie</p>
            }
        </div>
    );
};

export default Side;
