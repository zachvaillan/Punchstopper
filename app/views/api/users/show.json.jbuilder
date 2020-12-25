json.extract! @user, :id, :name, :email 
json.photoUrl url_for(@user.photo)
json.projects @user.projects do |project|
    json.title project.title
    json.description project.description
    json.photoUrl url_for(project.photo)
end
