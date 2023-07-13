
// Get all jobs =>  / api/v1/jobs
exports.getJobs  = (req, res, next) => {
        res.status(200).json({
          success: true,
<<<<<<< HEAD
         // middlewareUser : req.user,
         requestMethod : req.requestMethod,
=======
          middlewareUser : req.user,
>>>>>>> 4e3bba4dd0d0c14fd42e65864cb85ba4bec55130
          message: "This route will display all jobs in the future",
});
}
