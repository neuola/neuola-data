Neuola Data Project
===========

[Neuola Data][] is a data access model for [Neuola][] project. It shares the data access methods among all the sub-projects of [Neuola][]. However, it's also a standalone module that could embeded into any content management projects.

The data structure here is derived partly from the work in the [old Neuola][], a website template used to simplify the development of content-management-like websites such as blogs and news sites.

## Structure

The structure of the [Neuola Data][] Project is modeled after [Mongoose][], a ODM for MongoDB. The used schemas are settled in [model](tree/master/model) folder.

For more information about [Mongoose][], you can refer to the [wiki](wiki) or its website.

[Neuola]: http://neuola.github.io/ "Project Neuola"
[Neuola Data]: http://neuola.github.io/neuola-data "Project Neuola Data"
[old Neuola]: http://github.com/neuola-legacy "The origin project"
[Mongoose]: http://www.mongoosejs.com "Mongoose ODM for MongoDB"
