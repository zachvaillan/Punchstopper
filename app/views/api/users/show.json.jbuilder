json.extract! @user, :id, :name, :email 
json.photoUrl url_for(@user.photo)
json.projects @user.projects