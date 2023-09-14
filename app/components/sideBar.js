import React from 'react'

export default function SideBar() {
  return (
<div class="content">
        <div class="sidebar">
            <div class="sidebar__brand">
                <i class="fa fa-twitter"></i>
            </div>
            <a href="#" class="sidebar__item">
                <i class="sidebar__item__icon fa fa-home"></i>
                <span class="sidebar__item__text">Home</span>
            </a>
            <a href="#" class="sidebar__item">
                <i class="sidebar__item__icon fa fa-compass"></i>
                <span class="sidebar__item__text">Explore</span>
            </a>
            <a href="#" class="sidebar__item">
                <i class="sidebar__item__icon fa fa-bell"></i>
                <span class="sidebar__item__text">Notifications</span>
            </a>
            <a href="#" class="sidebar__item">
                <i class="sidebar__item__icon fa fa-envelope"></i>
                <span class="sidebar__item__text">Messages</span>
            </a>
            <a href="#" class="sidebar__item">
                <i class="sidebar__item__icon fa fa-bookmark"></i>
                <span class="sidebar__item__text">Bookmarks</span>
            </a>
            <a href="#" class="sidebar__item">
                <i class="sidebar__item__icon fa fa-list-alt"></i>
                <span class="sidebar__item__text">Lists</span>
            </a>
        </div>
    </div>
  )
}
