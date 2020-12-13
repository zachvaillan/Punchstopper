class Api::ProjectsController < ApplicationController

    def create
        @project = Project.new(project_params)
        @project.owner_id = current_user.id
        if @project.save
            render :index
        else
            render json: @project.errors.full_messages
        end
    end

    def index 
        @projects = Project.all
    end

    def show 
        @project = Project.find_by(id: params[:id])
        render :show
    end

    def update
        @project = Project.find_by(id: params[:id])
        @project.update(project_params)
        if @project.save
            render :show
        else 
            render json: @project.errors.full_messages 
        end
    end

    def project_params
        params.require(:project).permit(:title, :location, :launched, :category, :description, :end_date, :funding_goal, :funding_amount, :image_url)
    end

end
