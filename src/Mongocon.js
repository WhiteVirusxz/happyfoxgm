var Mongoose = require('mongoose');
var Mpass = 'mongodb://ChaseOtaku:f9B1D9Y8V138TYFDE2F428Vgh@neydlisbot-shard-00-00.ophnb.mongodb.net:27017,neydlisbot-shard-00-01.ophnb.mongodb.net:27017,neydlisbot-shard-00-02.ophnb.mongodb.net:27017/VKDataBase?ssl=true&replicaSet=atlas-sjg0e5-shard-0&authSource=admin&retryWrites=true&w=majority';

const Smongocon = ({}) => {
  Mongoose.connect(Mpass, { useNewUrlParser: true });
}

module.exports = Mongoose.model("Smongoconnect", Smongocon);
