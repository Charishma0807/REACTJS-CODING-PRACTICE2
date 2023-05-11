// const Button = props => {
//   //  Write your code here.
//   const{button1,button2,button3} = props;
//   return{
//       <button className = { button1}>{content}</button>;
//       <button className = { button2}>{content}</button>;
//       <button className = { button3}>{content}</button>;
//   }
// }

// const element = (
//   //  Write your code here.
//   <div className = {bg-container}>
//   <h1 className = "name">{Social Buttons}</h1>;
//   <div>
//     <Button button1 = "like" />;
//     <Button button2 = "comment" />;
//     <Button button3 = "share" />;
//     </div>

// </div>
// );

// ReactDOM.render(element, document.getElementById('root'))

const Button = (props) => {
  const { className, buttonText } = props;

  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="social-buttons-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button buttonText="Like" className="like-button" />
        <Button buttonText="Comment" className="comment-button" />
        <Button buttonText="Share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
