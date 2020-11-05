const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://IhorStoner:123456789q@dz10.6iiqt.mongodb.net/Dz10',
  {useNewUrlParser: true, useUnifiedTopology: true}
);