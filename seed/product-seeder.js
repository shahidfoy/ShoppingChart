var Product = require('../models/product');

// connects to mongoose
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');


var products = [
    new Product ({
        imagePath: 'https://i.pinimg.com/736x/4f/c4/80/4fc480df0701ef0f3d54a6c752925a8d--anime-wolf-drawing-wolf-drawings.jpg',
        title: 'Wolf',
        description: 'Who I is',
        price: 100
    }),
    new Product ({
        imagePath: 'https://community.playstation.com/attachments/257743iB05F44573191B99F.jpg',
        title: 'Final Fantasy',
        description: 'One of the best games ever',
        price: 10
    }),
    new Product ({
        imagePath: 'https://community.playstation.com/attachments/257743iB05F44573191B99F.jpg',
        title: 'Kingdom Hearts',
        description: 'The one game I can relate to',
        price: 20
    }),
    new Product ({
        imagePath: 'http://www.hardcoregamer.com/wp-content/uploads/2017/01/Kingdom-Hearts-II.jpg',
        title: 'Kingdom Hearts II',
        description: 'The one game I can relate to',
        price: 20
    }),
    new Product ({
        imagePath: 'http://www.gamerampage.net/uploads/2/9/5/3/29536417/kh32_orig.jpg',
        title: 'Kingdom Hearts III',
        description: 'The one game I can relate to',
        price: 20
    })
];

var done = 0;

// stores products into database
for(var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}