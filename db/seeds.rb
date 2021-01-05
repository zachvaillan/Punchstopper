# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Project.destroy_all

guest = User.create!({
  name: 'Guest',
  email: 'demo',
  password: 'demodemo'
})

# guest.photo.attach(io: File.open('/Users/zachvaillancourt/Downloads/jr-korpa-iTFu87JYsr4-unsplash.jpg'), filename: 'jr-korpa-iTFu87JYsr4-unsplash.jpg')
guest.photo.attach(io: File.open('/Users/zachvaillancourt/Downloads/jr-korpa-iTFu87JYsr4-unsplash.jpg'), filename: 'jr-korpa-iTFu87JYsr4-unsplash.jpg')

project_maker = User.create!({
  id: 4,
  name: 'Project Man',
  email: 'project-man12@gmail.com',
  password: 'project-king!'
})

project1 = Project.create!({
  title: "Build the Eiffel Tower",
  description: "Build a monument to Paris!",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})

project1.photo.attach(io: File.open('/Users/zachvaillancourt/Downloads/kitera-dent-klcIcBJ-0Vc-unsplash.jpg'), filename: 'kitera-dent-klcIcBJ-0Vc-unsplash.jpg')

