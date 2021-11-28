import { UserType } from '../models';

const verifyAuth = (req, res, next) => {
  if(req.session.userId) next();
  else res.status(401).json({msg: "Unauthorized"})
}

const isCollaborator = (req, res, next) => {
  if(req.session.userType === UserType.COLLABORATOR) next();
  else res.status(401).json({msg: "Unauthorized"})
}

export default { verifyAuth, isCollaborator }