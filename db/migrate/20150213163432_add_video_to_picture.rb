class AddVideoToPicture < ActiveRecord::Migration
  def change
    add_column :pictures, :video_link, :string
  end
end
