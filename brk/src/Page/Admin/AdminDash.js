import React,{useState,useEffect} from 'react'
import { Container, Form,Button,Alert,Row,Col,Card } from 'react-bootstrap'
import firebase from 'firebase'
import { connect } from 'react-firebase'
import shortid from 'shortid'
const firebaseConfig = {
    apiKey: "AIzaSyCApad_Ykkvn5_df5lT2RD8CAlKmKhAoEw",
    authDomain: "brk-systems.firebaseapp.com",
    projectId: "brk-systems",
    storageBucket: "brk-systems.appspot.com",
    messagingSenderId: "27842869867",
    appId: "1:27842869867:web:89dd9e8774f215d6b00f2e",
    measurementId: "G-66Z7E8LP91"
  };
    // Initialize Firebase
  
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
   }else {
      firebase.app(); // if already initialized, use that one
   }
  


export default function AdminDash() {

    const [datas, setdatas] = useState('')

    useEffect(() => {
        getAllClientsData()
    }, [])

    const getAllClientsData = () => {
        firebase.database().ref("/contacts").on(
            'value',
            snapshot => {
                setdatas(Object.values(snapshot.val()))
            }
        )
    }
    const showAllDatas = () => {
 
        
    }

    const [password, setpassword] = useState(null);
    const [showa, setshowa] = useState(false);
    const [showDashs, setshowDash] = useState(false);


    const [addNews, setaddNews] = useState(false);
    const [addVideo, setaddVideo] = useState(false);
    const [seeClient, setseeClients] = useState(false);
    const [addDealers, setaddDealers] = useState(false);

    const [DName, setDName] = useState('');
    const [DPhone, setDPhone] = useState('');
    const [DLoc, setDLoc] = useState('');
    const [DEmail, setDEmail] = useState('');
    const [DAddress, setDAddress] = useState('');
    const [DLatitude, setDLatitude] = useState('');
    const [DLongitude, setDLongitude] = useState('');
    // News startes
        const [heading, setheading] = useState('');
        const [news, setnews] = useState('');
    //
    
    // Add videos
        const [url, seturl] = useState('')

    // Common
        const [success, setsuccess] = useState(false)
    //

    const saveNews = e => {
        e.preventDefault();
        const uid = shortid.generate();
         firebase.database().ref(`/news/${uid}`)
         .set(
           {  heading,
             news,
             id:uid,
             date:Date.now()}
         ).then(
            console.log("Saved Data"),

            setheading(''),
            setnews(''),
            setsuccess(true),

            

         ).catch(err => 
            console.log(err)
            
            )

        
    
    }
    const saveVideo = e => {
        e.preventDefault();
        const uid = shortid.generate();
         firebase.database().ref(`/video/${uid}`)
         .set(
           {  url,
             id:uid,
             date:Date.now()}
         ).then(
            console.log("Saved Data"),

            seturl(''),
            setsuccess(true),

            

         ).catch(err => 
            console.log(err)
            
            )

        
    
    }
    const saveDealers = (e) => {
        e.preventDefault();
        const uid = shortid.generate();
        firebase.database().ref(`/dealer/${DLoc}/${uid}`).set(
            {   
                
                name:DName,
                email:DEmail,
                phone:DPhone,
                location:DLoc,
                address:DAddress,
                latitude:DLatitude,
                longitude:DLongitude

            }
        ).then(
            console.log("Saved Data"),

            seturl(''),
            setsuccess(true),

            

         ).catch(err => 
            console.log(err)
            
            )
    }
    const savedSuccess = () => {
        if(success)
       { return(
            <Alert variant="success">
                Saved Successfully
           </Alert>
        )}
    }

    const newsChangeHandler = (name) => event => {
        if(name === 'heading')
            setheading(event.target.value);
        else if(name === 'news')
            setnews(event.target.value);
        else if(name === 'url')
            seturl(event.target.value);
    }
    const dealerChangeHandler = (name) => event => {
        if(name === 'dname')
            setDName(event.target.value);
        else if(name === 'dphone')
            setDPhone(event.target.value);
        else if(name === 'dloc')
            setDLoc(event.target.value);
        else if(name === 'demail')
            setDEmail(event.target.value);
        else if(name === 'daddress')
            setDAddress(event.target.value);
            else if(name === 'dlat')
            setDLatitude(event.target.value);
            else if(name === 'dlong')
            setDLongitude(event.target.value);
    }
    const addNewsBtn = () => {
        setaddNews(true)
        setaddVideo(false)
        setseeClients(false)
        setaddDealers(false)

    }
    const addVideoBtn = () => {
        setaddVideo(true)
        setaddNews(false)
        setseeClients(false)
        setaddDealers(false)


    }
    const addDealersBtn = () => {
        setaddVideo(false)
        setaddNews(false)
        setseeClients(false)
        setaddDealers(true)


    }
    const seeClients = () => {
        setaddVideo(false)
        setaddNews(false)
        setseeClients(true)
        setaddDealers(false)


    }
    const addNewsSection = () => {
        if(addNews){
            return(
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Add Heading</Form.Label>
    <Form.Control type="text" placeholder="Enter News Heading" value={heading} onChange={newsChangeHandler('heading')}/>
    
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Add News</Form.Label>
    <Form.Control type="text" placeholder="Enter News (max 55)" value={news} onChange={newsChangeHandler('news')}/>
    
  </Form.Group>


  <Button variant="primary" type="submit" block onClick={saveNews}>
    Submit
  </Button>
</Form>
            )
        }
    }
    const addVideoSection = () => {
        if(addVideo)
       {
            return(
                <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Add URL</Form.Label>
                  <Form.Control type="text" placeholder="Enter News Heading" value={url} onChange={newsChangeHandler('url')}/>
                  
                </Form.Group>
              
              
              
                <Button variant="primary" type="submit" block onClick={saveVideo}>
                  Submit
                </Button>
              </Form>
        )
    }
    }
    const addDealersSection = () => {
        if(addDealers){
            return(
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Add Name</Form.Label>
    <Form.Control type="text" placeholder="Enter News Heading" value={DName} onChange={dealerChangeHandler('dname')}/>
    
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Add Phone</Form.Label>
    <Form.Control type="text" placeholder="Enter News (max 55)" value={DPhone} onChange={dealerChangeHandler('dphone')}/>
    
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Add Location</Form.Label>
    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Districts</Form.Label>
    <Form.Control as="select" onChange={dealerChangeHandler('dloc')}>
    <option>Ariyalur</option>
<option>Chengalpattu</option>
<option>Chennai</option>
<option>Coimbatore</option>
<option>Cuddalore</option>
<option>Dharmapuri</option>
<option>Dindigul</option>
<option>Erode</option>
<option>Kallakurichi</option>
<option>Kanchipuram</option>
<option>Kanyakumari</option>
<option>Karur</option>
<option>Krishnagiri</option>
<option>Madurai</option>
<option>Nagapattinam</option>
<option>Namakkal</option>
<option>Nilgiris</option>
<option>Perambalur</option>
<option>Pudukkottai</option>
<option>Ramanathapuram</option>
<option>Ranipet</option>
<option>Salem</option>
<option>Sivaganga</option>
<option>Tenkasi</option>
<option>Thanjavur</option>
<option>Theni</option>
<option>Thoothukudi (Tuticorin)</option>
<option>Tiruchirappalli</option>
<option>Tirunelveli</option>
<option>Tirupathur</option>
<option>Tiruppur</option>
<option>Tiruvallur</option>
<option>Tiruvannamalai</option>
<option>Tiruvarur</option>
<option>Vellore</option>
<option>Viluppuram</option>
<option>Virudhunagar</option>

    </Form.Control>
  </Form.Group>
    
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Add Dealer's Address</Form.Label>
    <Form.Control type="text" placeholder="Enter Full address" value={DAddress} onChange={dealerChangeHandler('daddress')}/>
    
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Add Email</Form.Label>
    <Form.Control type="text" placeholder="Enter News (max 55)" value={DEmail} onChange={dealerChangeHandler('demail')}/>
    
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Add Latitude</Form.Label>
    <Form.Control type="text" placeholder="Enter News (max 55)" value={DLatitude} onChange={dealerChangeHandler('dlat')}/>
    
  </Form.Group>
  
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Add Longitude</Form.Label>
    <Form.Control type="text" placeholder="Enter News (max 55)" value={DLongitude} onChange={dealerChangeHandler('dlong')}/>
    
  </Form.Group>
  <Button variant="primary" type="submit" block onClick={saveDealers}>
    Submit
  </Button>
</Form>
            )
        }
    }
    const onChangeHandler = (event) => {
        setpassword(event.target.value);
    }
    const submitPasscode = (e) => {
        e.preventDefault();
        if(password){
            setshowa(false);
            if(password === 'brk'){
                setshowDash(true)
            }

        }
        else{
            setshowa(true)
        }
    }
    const showAlert = () => {
        if(showa){
            return(
                <Alert variant="danger">
               Please enter all value
              </Alert>
            )
        }
    }

    const showDash = () => {
        if(showDashs){
            return(
                <Container>
      
      <Row>
        <Col>
        <div className="mb-2">
    <Button variant="success" size="lg" onClick={seeClients}>
    See Clients
    </Button>
  </div>
       </Col>
        <Col>
        <Button variant="warning" size="lg" onClick={addNewsBtn}>
        Add News
    </Button>
        </Col>
        <Col>
        <Button variant="dark" size="lg" onClick={addVideoBtn}>
        Add Videos
    </Button>
        </Col>
        <Col>
        <Button variant="danger" size="lg" onClick={addDealersBtn}>
        Add Dealers
    </Button>
        </Col>
      </Row>
    </Container>
            );
        }
        
    }


 

    return (
        <div>
           <Container className="mt-lg-5">
               {showAlert()}
               <div style={{marginTop:180}}>
               {showDash()}

               <div style={{marginTop:50}}>
{savedSuccess()}
               {addNewsSection()}
                {addVideoSection()}
                {addDealersSection()}
                {datas && seeClient ? (
          console.log(datas),
          datas.map((key) => {
          
              return ( <div>
                  <Card>
                <Card.Body>
                    {key.email ? (
    <Card.Text>
    Email {key.email}
</Card.Text>
                    ) : (
                        null
                    )

                    }
                       {key.name ? (
    <Card.Text>
    Email {key.name}
</Card.Text>
                    ) : (
                        null
                    )

                    }
                       {key.phone ? (
    <Card.Text>
    Email {key.phone}
</Card.Text>
                    ) : (
                        null
                    )

                    }
            
                    </Card.Body>
                    </Card>
                <br/>
                </div>)
            
          })
        )
        : (
            <Card body>Loading...</Card>

        )



                }
               </div>
                   </div>
        {!showDashs ? 
               (<Form>
               <Form.Group controlId="formBasicEmail" style={{marginTop:'10%'}}>
                 <Form.Label>Enter the passcode</Form.Label>
                 <Form.Control type="text" placeholder="Enter email" onChange={onChangeHandler}/>
                 <Form.Text className="text-muted">
                   This is to confirm, you are admin
                 </Form.Text>
               </Form.Group>
               <Button variant="primary" type="submit" onClick={submitPasscode}>
                 Submit
               </Button>
             </Form>):(null)
        }
           </Container>
        </div>
    )
}
