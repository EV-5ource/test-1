
import React, { useState } from 'react';
import { generateAIAudit, AuditRequest, AuditResponse } from '../services/geminiService';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AuditRequest>({
    businessName: '',
    businessType: 'Agency',
    mainPainPoint: '',
    teamSize: '1-5',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResponse | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const auditResult = await generateAIAudit(formData);
      setResult(auditResult);
    } catch (err) {
      alert("Something went wrong generating your audit.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md" 
        onClick={onClose}
      />
      <div className="relative bg-surface-dark border border-gray-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Free AI Systems Audit</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-white">
              <span className="material-icons">close</span>
            </button>
          </div>

          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Business Name</label>
                  <input 
                    required
                    className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:border-primary outline-none"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Business Type</label>
                  <select 
                    className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:border-primary outline-none"
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  >
                    <option>Agency</option>
                    <option>SaaS Founders</option>
                    <option>Coaches / Consultants</option>
                    <option>E-commerce</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Biggest Bottleneck / Pain Point</label>
                <textarea 
                  required
                  rows={3}
                  placeholder="e.g. Lead generation is too slow, manually onboarding takes too long..."
                  className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:border-primary outline-none"
                  value={formData.mainPainPoint}
                  onChange={(e) => setFormData({...formData, mainPainPoint: e.target.value})}
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-primary text-black font-bold rounded-lg shadow-neon hover:shadow-neon-hover disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="material-icons animate-spin">sync</span>
                    Analyzing Your Business...
                  </>
                ) : (
                  <>Generate My AI Strategy</>
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl">
                <p className="text-primary font-bold text-sm mb-1 uppercase tracking-widest">Potential Impact</p>
                <p className="text-3xl font-bold text-white">{result.estimatedTimeSavings}</p>
                <p className="text-gray-400 text-sm mt-1">Saved per week through intelligent automation.</p>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-3">Strategic Summary</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{result.summary}</p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-3">Priority Automations</h4>
                <ul className="space-y-2">
                  {result.suggestedAutomations.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="material-icons text-primary text-xs mt-1">check_circle</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <p className="text-xs text-gray-500 text-center italic">{result.nextSteps}</p>
                <button 
                  onClick={onClose}
                  className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Book Your Implementation Call
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditModal;
