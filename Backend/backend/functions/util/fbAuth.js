/* const {admin} =require('./admin');
const {db} =require('../util/admin' );
module.exports = (req,res, next)=>{
    let idToken ;
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
   
      idToken = req.headers.authorization.split('Bearer ')[1] ;
      
      
    }else {
        console.error('No token found')
        return res.status(403).json({error : 'Unauthorized'}) ;

    }
    
    admin.auth().verifyIdToken(idToken)
    .then(decodedToken => {
      //console.log(decodedToken) ;
      //return res.json({chaine:`${decodedToken}`});
        req.user = decodedToken ;
       
        return db.collection('users')
        .where('userId', '==',req.user.uid)
        .limit(1)
        .get() ;
    })
    .then(data => {
      
        req.user.id = data.docs[0].data().id;
        req.user.imageUrl = data.docs[0].data().imageUrl;
        req.user.lastName= data.docs[0].data().lastName;
        req.user.firstName= data.docs[0].data().firstName;
        req.user.userId = data.docs[0].data().userDataId;
        return next();
    })
    .catch(err =>{
        admin.auth().verifyIdToken(idToken)
    .then(decodedToken => {
        
        req.user = decodedToken ;
        
        return db.collection('employeeData')
        .where('employeeId', '==',req.user.uid)
        .limit(1)
        .get() 
        .then(data =>{
            req.user.id = data.docs[0].data().id;
        req.user.imageUrl = data.docs[0].data().imageUrl;
        req.user.employeeFullName = data.docs[0].data().employeeFullName;
        req.user.employeeDataId = data.docs[0].data().employeeDataId
            return next();
    })
})
.catch(err => {
    console.error(err) ;
    res.status(500).json({general : 'Something went wrong , please try again'}) ;
});

    })
}
*/
