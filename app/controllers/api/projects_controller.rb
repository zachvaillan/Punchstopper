class Api::ProjectsController < ApplicationController

    def create
        @project = Project.new(project_params)
        if @project.save
            render :show
        else
            render json: @project.errors.full_messages
        end
    end

    def show 
        @project = Project.find_by(id: params[:id])
        render :show
    end

    def project_params
        params.require(:project).permit(:title, :description, :end_date, :funding_goal, :funding_amount)
    end

end
