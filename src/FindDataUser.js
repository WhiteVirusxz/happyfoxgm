var Mongoose = require('mongoose');
import DataB from './SchemaM';

const findDataUser = ({ fetchedUser }) => {
  DataB.findOne({
    userID: fetchedUser.id
  },(data, err) => {
    if(err) console.log(err);
    if(!data){
      const nData = new DataB({
        userID: fetchedUser,
        history: 0,
        historypday: 2,
      })
      nData.save().catch(err => console.log(err));
    }
  })
}

module.exports = Mongoose.model("FindDATA", findDataUser);
