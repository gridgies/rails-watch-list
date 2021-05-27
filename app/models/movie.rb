class Movie < ApplicationRecord
  has_many :bookmarks
  has_many :lists, through: :bookmarks

  validates :title, presence: true, uniqueness: true
  validates :overview, presence: true
end

  # before_destroy :check_existence

  # def check_existence
  #   status = true
  #   if self.bookmarks >= 1
  #     self.errors[:deletion_status] = 'Cannot delete movie that is in a bookmark.'
  #     status = false
  #   else
  #     self.errors[:deletion_status] = 'OK.'
  #   end
  # end
