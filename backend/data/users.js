import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Pham Toan',
    email: 'phamtoan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Nhu Ngoc',
    email: 'nhungoc@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
