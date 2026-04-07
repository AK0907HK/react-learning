import Avator from "./TodoList";

function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile() {
    return (
        <Card>
          <Avator
            size={100}
            person={{ 
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
            }}                                        
          />
        </Card>
    );
}