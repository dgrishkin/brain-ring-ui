import { FC, useEffect } from 'react';

export const PlayerPage: FC = () => {

    useEffect(() => {
        fetch('/api/player/checkGame').then(res => res.json()).then(console.log);
    }, [])
    
    return (
        <div>
            <h1>Player page</h1>
        </div>
    );
}
