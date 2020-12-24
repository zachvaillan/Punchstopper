class Api::RewardsController < ApplicationController


    def create
        @reward = Project.new(reward_params)
        if @reward.save
            render :index
        else
            render json: @project.errors.full_messages
        end
    end

    def reward_params
        params.require(:reward).permit(:min_amount, :title, :description, :deliver_date, :backer_count)
    end

end
