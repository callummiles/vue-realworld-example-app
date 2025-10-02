import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService, { Profile as ProfileType } from '../services/api';

const Profile: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!username) return;
      
      try {
        setLoading(true);
        const data = await apiService.fetchProfile(username);
        setProfile(data.profile);
        setError(null);
      } catch (err) {
        setError('Failed to load profile');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">Error: {error}</div>;
  if (!profile) return <div className="container">Profile not found</div>;

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={profile.image} className="user-img" alt={profile.username} />
              <h4>{profile.username}</h4>
              <p>{profile.bio}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <span className="nav-link active">My Articles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
