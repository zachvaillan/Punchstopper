json.extract! @user, :id, :name, :email 
json.photoUrl url_for(@user.photo)
json.projects @user.projects do |project|
    json.id project.id
    json.title project.title
    json.description project.description
    json.photoUrl url_for(project.photo)
    json.category project.category
end
json.backed_projects @user.backed_projects do |backed_proj|
    json.title backed_proj.title
    json.photoUrl url_for(backed_proj.photo)
    json.description backed_proj.description
end