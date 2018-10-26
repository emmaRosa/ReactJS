function ListItem(props){
        return <li>{props.item}</li>
    }

 function AppTitle(props){
        return (
            <div>
                <h1>{props.title}</h1>
                <h2>Total Number of Traits: {props.numItems}</h2>
            </div>

        ) 
    }

function TraitList(props){
        return (
            <div>
                <h3>{props.header}</h3>
                <ol>
                    <ListItem item = {props.items[0]}/>
                    <ListItem item = {props.items[1]}/>
                    <ListItem item = {props.items[2]}/>
                    <ListItem item = {props.items[3]}/>
                </ol>
            </div>
        )
    }

function HogwartsApp(props){

        return (
            <div>
                <AppTitle title = "Hogwarts Houses" numItems = "16"/>
                <TraitList header = "Gryffindor" items = {[ "Courage","Bravery","Nerve","Chivalry"]}/>
                <TraitList header = "Ravenclaw" items = {[ "Intelligence","Creativity","Learning","Wit"]}/>
                <TraitList header = "Hufflepuff" items = {[ "Patience","Justice","Loyalty","Hard Work"]}/>
                <TraitList header = "Slytherin" items = {[ "Ambition","Cunning","Leadership","Resourcefulness"]}/>
            </div>
        )
    }

ReactDOM.render(
    <HogwartsApp/>,
    document.getElementById("root")
)
