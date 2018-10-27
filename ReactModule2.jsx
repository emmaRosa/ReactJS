function Button(props){
  return(
     <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick = {() => props.handleClick(props.answer)}>{props.option}</button>
  )
}

function Answers(props){
  
  var values = [];
  for (let i = 0; i<props.options.length; i++){
    
    values.push(<Button key = {props.options[i].id} handleClick = {props.handleClick} question = {props.question} option = {props.options[i].option} answer = {props.options[i].answer} />)}
  return(
    <div>{values}</div>
  )
   
}

function Question(props){
  var questions = [
    {
      'id':1,
      'question' :'What house was Moaning Myrtle sorted into?',
      'options':[
        {
          'id': 'A',
          'option':'Hufflepuff',
          'answer': 0
        },{
          'id': 'B',
          'option':'Ravenclaw',
          'answer': 1
        },{
          'id': 'C',
          'option':'Gryffindor',
          'answer': 0
        },{
          'id': 'D',
          'option':'Slytherin',
          'answer': 0
        }]
    },
    {
      'id':2,
      'question' :'What number is Harrys vault at the Gringotts Wizarding Bank?',
      'options':[
        {
          'id': 'A',
          'option':'Seven Hundred and Eleven',
          'answer': 0
        },{
          'id': 'B',
          'option':'Six hundred and Eighty-Seven',
          'answer': 1
        },{
          'id': 'C',
          'option':'Six hundred and Twenty-Seven',
          'answer': 0
        },{
          'id': 'D',
          'option':'Seven Hundred and Thirteen',
          'answer': 0
        }]
    },
    {
      'id':3,
      'question' :'Where do the Dursleys live?',
      'options':[
        {
          'id': 'A',
          'option':'Hogsmeade',
          'answer': 0
        },{
          'id': 'B',
          'option':'Little Hangleton',
          'answer': 0
        },{
          'id': 'C',
          'option':'Little Whinging',
          'answer': 1
        },{
          'id': 'D',
          'option':'Sutherland',
          'answer': 0
        }]
    },
    {
      'id':4,
      'question' :'What does Professor Lupin give Harryto eat after his encounter with a Dementor?',
      'options':[
        {
          'id': 'A',
          'option':'Bertie Botts Every Flavour Beans',
          'answer': 0
        },{
          'id': 'B',
          'option':'Liquorice Wand',
          'answer': 0
        },{
          'id': 'C',
          'option':'Sherbet Lemons',
          'answer': 0
        },{
          'id': 'D',
          'option':'Chocolate',
          'answer': 1
        }]
    },
    {
      'id':5,
      'question' :'How many points is the Golden Snitch worth?',
      'options':[
        {
          'id': 'A',
          'option':'50',
          'answer': 0
        },{
          'id': 'B',
          'option':'100',
          'answer': 0
        },{
          'id': 'C',
          'option':'150',
          'answer': 1
        },{
          'id': 'D',
          'option':'200',
          'answer': 0
        }]
    },
    {
      'id':6,
      'question' :'What body part does Ron leave behind when he does his apparition test?',
      'options':[
        {
          'id': 'A',
          'option':'His Nose',
          'answer': 0
        },{
          'id': 'B',
          'option':'Three Fingers',
          'answer': 0
        },{
          'id': 'C',
          'option':'Half an Eyebrow',
          'answer': 1
        },{
          'id': 'D',
          'option':'His Left Foot',
          'answer': 0
        }]
    },
    {
      'id':7,
      'question' :'How many brothers does Ron have?',
      'options':[
        {
          'id': 'A',
          'option':'5',
          'answer': 1
        },{
          'id': 'B',
          'option':'7',
          'answer': 0
        },{
          'id': 'C',
          'option':'2',
          'answer': 0
        },{
          'id': 'D',
          'option':'4',
          'answer': 0
        }]
    },
    {
      'id':8,
      'question' :'Who Destroyed the last Remaining Horcux?',
      'options':[
        {
          'id': 'A',
          'option':'Ginny Weasley',
          'answer': 0
        },{
          'id': 'B',
          'option':'Hermione Granger',
          'answer': 0
        },{
          'id': 'C',
          'option':'Neville Longbottom',
          'answer': 1
        },{
          'id': 'D',
          'option':'Ron Weasley',
          'answer': 0
        }]
    },
    {
      'id':9,
      'question' :'What is the name of Dumbledores Phoenix?',
      'options':[
        {
          'id': 'A',
          'option':'Fluffy',
          'answer': 0
        },{
          'id': 'B',
          'option':'Firenze',
          'answer': 0
        },{
          'id': 'C',
          'option':'Fawkes',
          'answer': 1
        },{
          'id': 'D',
          'option':'Hermes',
          'answer': 0
        }]
    },
    {
      'id':10,
      'question' :'What do Ron and Herminone use to destroy Helga Hufflepuffs cup?',
      'options':[
        {
          'id': 'A',
          'option':'The Sword of Gryffindor',
          'answer': 0
        },{
          'id': 'B',
          'option':'Fiendfyre',
          'answer': 0
        },{
          'id': 'C',
          'option':'A Basilisk Fang',
          'answer': 1
        },{
          'id': 'D',
          'option':'The Killing Curse',
          'answer': 0
        }]
    },
  ]
  var found = questions.find(function(values) {
    if(values.id === props.question){
      return values
    }
  });
  
  var options = found.options;
  var question = found.question;
  return(
    <div className = "col-md-8">
       <p className="text-center">{question}</p>
       <Answers options = {options} question = {question}  handleClick = {props.handleClick}/> 
    </div>
  )
}

function Results(props){
   return(
    <div className = "col-md-4 jumbotron">
       <div className="alert alert-success" role="alert">
        <strong>Correct : </strong> {props.correct}
      </div>
      <div className="alert alert-danger" role="alert">
        <strong>Incorrect : </strong> {props.incorrect}
      </div>
    </div>
  )
}

function Closing(props){
  var result = "";
  if(props.correct > props.incorrect){
     result = "Congratulations, You are a True Harry Potter Fan!";
     }
  else {
    result = "Best go read the books again!";
  }
  return(
    <div>
        <hr/>
        <h2>{result}</h2>
        <hr/>
        <Results incorrect={props.incorrect} correct={props.correct}/>
     </div>
  )
}

class TriviaQuiz extends React.Component{
  constructor(props){
    super(props)
    
      this.state = {
        'question' : 1,
        'correct' : 0,
        'incorrect' : 0,
        'number':1,
        'total':10
      }
      this.handleClick = this.handleClick.bind(this)
   }
  
  handleClick(ans){
     let incorrect = this.state.incorrect
     let correct = this.state.correct
     
     let total = correct + incorrect;
     if(total < this.state.total){
       if(ans){
         correct = correct + 1
       }
       else{
        incorrect = incorrect + 1
       }
     }
     if(this.state.question < this.state.total){
       
       this.setState((prevState, props) => {
         return {
              question: prevState.question + 1, 
              number: prevState.number + 1, 
              incorrect : incorrect, 
              correct:correct
          }
        })
     }
     else{
       this.setState((prevState, props) => {
         return {
              question: prevState.question, 
              number: prevState.number + 1, 
              incorrect : incorrect, 
              correct:correct
          }
        })
     }  
  }
  
  restart(){
    this.setState({question:1, correct:0, incorrect:0, number:1})
  }
  
  render(){
    if(this.state.number > this.state.total){
       return (
         <div className="container">
           <div className="row">
             <div className="col-md-12">
               <Closing incorrect={this.state.incorrect} correct={this.state.correct}/>
               <button type="button"  className="btn btn-success btn-lg" onClick = { () => this.restart()}>Restart</button>
             </div>
           </div>
         </div>
       )
    }
    return(
      <div className="container">
        <hr/>
        <h2 className="text-center">Harry Potter Trivia</h2>
        <hr/>
        <div className="row">
          <Question question={this.state.question} handleClick={this.handleClick}/>
          <Results incorrect={this.state.incorrect} correct={this.state.correct}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
    <TriviaQuiz/>,
    document.getElementById('root')
)
