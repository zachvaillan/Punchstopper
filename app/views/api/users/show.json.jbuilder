json.extract! @user, :id, :name, :email 
json.photoUrl url_for(@user.photo)
json.projects @user.projects do |project|
    json.id project.id
    json.title project.title
    json.description project.description
    json.photoUrl url_for(project.photo)
    json.category project.category
end
