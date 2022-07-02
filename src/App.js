
import './App.css';
import Modal from "./Modal/Modal";
import {useState} from "react";

function App() {
  const [modalActive, setModalActive] = useState(true)
  return (
    <div className="app">
      <main>
        <button className='open-btn' onClick={() => setModalActive(true)}>Open modal window</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis consectetur culpa facilis labore perferendis perspiciatis, quia similique voluptate?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis consectetur culpa facilis labore perferendis perspiciatis, quia similique voluptate?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis consectetur culpa facilis labore perferendis perspiciatis, quia similique voluptate?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis consectetur culpa facilis labore perferendis perspiciatis, quia similique voluptate?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis consectetur culpa facilis labore perferendis perspiciatis, quia similique voluptate?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis consectetur culpa facilis labore perferendis perspiciatis, quia similique voluptate?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis consectetur culpa facilis labore perferendis perspiciatis, quia similique voluptate?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis consectetur culpa facilis labore perferendis perspiciatis, quia similique voluptate?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis consectetur culpa facilis labore perferendis perspiciatis, quia similique voluptate?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis consectetur culpa facilis labore perferendis perspiciatis, quia similique voluptate?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis consectetur culpa facilis labore perferendis perspiciatis, quia similique voluptate?</p>
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum earum fugiat fugit harum laborum minus molestiae nihil nulla vero. Aspernatur cum, deleniti dolore harum iure laudantium sequi. Eligendi, reprehenderit!</p>
      </Modal>
    </div>
  );
}

export default App;
