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

# require 'open-uri'

# file = open('https://punchstopper-seeds.s3-us-west-1.amazonaws.com/F9FE2A1E-A1D0-4B25-B79C-581FFB4D2E7A.png')

# guest.photo.attach(io: file, filename: 'F9FE2A1E-A1D0-4B25-B79C-581FFB4D2E7A.png')

project_maker = User.create!({
  id: 4,
  name: 'Project Man',
  email: 'project-man12@gmail.com',
  password: 'project-king!'
})

project1 = Project.create!({
  title: "Build the colosseum",
  description: "Build it, and the gladiators will come.",
  image_url: "https://rome.us/wp-content/uploads/rome-colosseum-810x405.jpg",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})

project2 = Project.create!({
  title: "Build the pyramids",
  description: "Give the pharaohs a good burial",
  image_url: "https://i.guim.co.uk/img/media/e3d9827f235ac40064f15d7df25024aec60500cb/0_134_5616_3370/master/5616.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a88796716cbfc08fa76316a14044fc29",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})

project3 = Project.create!({
  title: "Build the Golden Gate",
  description: "Let us cross the sea",
  image_url: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY1MTc3MjE0MzExMDgxNTQ1/topic-golden-gate-bridge-gettyimages-177770941.jpg",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})

project4 = Project.create!({
  title: "Build a super computer",
  description: "It is the information age!",
  image_url: "https://miro.medium.com/max/5120/1*rCXygjEs2TUU9vOX3qmDrw.jpeg",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})

project5 = Project.create!({
  title: "Build the Great Wall",
  description: "Some people build walls to see who cares enought to knock them down",
  image_url: "https://image.cnbcfm.com/api/v1/image/106246652-1573788271264gettyimages-1051651510.jpeg?v=1573788570",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})

project6 = Project.create!({
  title: "Build the Golden Gate",
  description: "Let us cross the sea",
  image_url: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY1MTc3MjE0MzExMDgxNTQ1/topic-golden-gate-bridge-gettyimages-177770941.jpg",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})

project7 = Project.create!({
  title: "Build the Golden Gate",
  description: "Let us cross the sea",
  image_url: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY1MTc3MjE0MzExMDgxNTQ1/topic-golden-gate-bridge-gettyimages-177770941.jpg",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})

project8 = Project.create!({
  title: "Build the Golden Gate",
  description: "Let us cross the sea",
  image_url: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY1MTc3MjE0MzExMDgxNTQ1/topic-golden-gate-bridge-gettyimages-177770941.jpg",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})

project9 = Project.create!({
  title: "Build the Golden Gate",
  description: "Let us cross the sea",
  image_url: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY1MTc3MjE0MzExMDgxNTQ1/topic-golden-gate-bridge-gettyimages-177770941.jpg",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})