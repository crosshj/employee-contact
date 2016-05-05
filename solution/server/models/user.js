import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true,
    default: mongoose.Types.ObjectId
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  },
  createdBy: {
    type: String,
    required: false
  },
  userType: {
    type: String,
    enum: ['Employer', 'Contact']
  },
  password: {
    type: String,
    min: 6
  },
  email: {
    type: String,
    match: /.+@.+\..+/
  },
  userName: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  phone: String,
  address: String,
  city: String,
  state: String,
  zip: String
});

// BOO: can't use arrow function because framework binds doc to func!
function saveMiddlewareHandler(next) {
  if (this.userType === 'Employer'
      && !!this.userName
      && !!this.password
  ) {
    this.createdBy = this.id;
    next();
  } else if (this.userType === 'Employer') {
    next(
      new Error('Employer must have user name and password.')
    );
  }

  if (this.userType === 'Contact'
      && !!this.createdBy
  ) {
    this.userName = this.id;
    next();
  } else if (this.userType === 'Employer') {
    next(
      new Error('Contact must note who created it with createdBy field.')
    );
  }

  next(
    new Error('Unable to create an Employer or Contact.')
  );
}

userSchema.pre('save', saveMiddlewareHandler);

export const UserModel = mongoose.model('users', userSchema);

